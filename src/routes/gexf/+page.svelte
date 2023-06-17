<script lang="js">
	import {
		TabGroup,
		Tab,
		Table,
		tableMapperValues
	} from '@skeletonlabs/skeleton';
	import Dropzone from 'svelte-file-dropzone/Dropzone.svelte';
    let gexfFiles = [
        
    ];
	const sourceData = [
		{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
		{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
		{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
		{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
		{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }
	];
	const tableSimple = {
		// A list of heading labels.
		head: ['Name', 'Symbol', 'Weight'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['name', 'symbol', 'weight']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, ['position', 'name', 'symbol', 'weight']),
		// Optional: A list of footer labels.
		foot: ['Total', '', '<code class="code">5</code>']
	};
    let files = {
		accepted: [],
		rejected: []
	};
    const filesTable = {
		// A list of heading labels.
		head: ['Name', 'Nodes', 'Edges'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(gexfFiles, ['name', 'nodes', 'edges']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(gexfFiles, ['id', 'name', 'nodes', 'edges']),
		// Optional: A list of footer labels.
		foot: ['Total', '', '<code class="code">5</code>']
	};
	let tabSet = 0;
	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
        console.log("files", files);
        const file = files.accepted[0];
        gexfFiles.push({
            id:gexfFiles.length,
            name: file.name,
            nodes:1,
            edges:0,
            processed:false,
            file:file
        });
        console.log("gexfFiles", gexfFiles);
        filesTable.body = tableMapperValues(gexfFiles, ['name', 'nodes', 'edges'])
	}
	//
</script>
<div class="container p-10 space-y-4">
	<h1>Import Gephi File</h1>
	<hr />
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nostrum, vero explicabo sunt ipsum asperiores. Molestias nostrum mollitia cumque veniam eum error atque, dolores nesciunt voluptas ea consectetur sed delectus.</p>
	<TabGroup>
		<Tab bind:group={tabSet} name="tab1" value={0}>Choose File</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>Graph View</Tab>
		<Tab bind:group={tabSet} name="tab3" value={2}>Data View</Tab>
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				<Dropzone on:drop={handleFilesSelect} accept=".gexf" multiple={false} containerClasses="" />
				<Table source={filesTable} interactive/>
			{:else if tabSet === 1}
				(tab panel 2 contents)
			{:else if tabSet === 2}
				<Table source={tableSimple} />
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>
