<script lang="ts">
	import { getdata } from "$lib/remote.svelte";
	import AlertIcon from "~icons/line-md/alert";
	let { data } = $props();
	let character = $derived(getdata().characters[data.characterID]);
</script>

<h1>Welcome to Your Characters!</h1>

<h2>Favourited Characters</h2>

{#if character === undefined}
	<div class="error-box-container">
		<div class="error-div">
			<div class="error-icon-container">
				<div class="error-icon-div">
					<div class="error-icon">
						<AlertIcon width="80px" height="80px" viewBox="0 -2 24 24" />
					</div>
				</div>
			</div>
			<div class="error-data">
				<h2>Nothing to see here</h2>
				<div class="error-link"><a href="/characters">View</a></div>
			</div>
		</div>
	</div>
{:else}
	{character.name}
{/if}

<style>
	.error-box-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.error-box-container .error-div {
		border: 2px;
		border-radius: 50px;

		padding: 20px;

		min-height: 100px;
		min-width: 400px;
		background-color: #f1f1f1;
		padding: 20px;
		font-size: 25px;
		overflow: hidden;
	}

	.error-box-container .error-data {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.error-box-container .error-link {
		float: right;
	}

	.error-box-container .error-icon-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.error-box-container .error-icon-div {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100px;
		height: 100px;

		background-color: white;
		border-radius: 100%;
	}

	.error-box-container .error-icon {
		filter: brightness(0) saturate(100%) invert(72%) sepia(90%) saturate(2937%) hue-rotate(1deg)
			brightness(105%) contrast(103%);
	}
</style>
