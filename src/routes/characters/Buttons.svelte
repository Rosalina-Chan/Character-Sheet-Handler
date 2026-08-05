<script lang="ts">
	import ArrowUpCircleIcon from "~icons/line-md/arrow-up-circle";
	import ArrowDownCircleIcon from "~icons/line-md/arrow-down-circle";
	let { characters, buttonClosed = $bindable() } = $props();
	let button = $state<HTMLButtonElement>();
	function blur() {
		button?.querySelector("svg")?.setCurrentTime(0);
	}
</script>

{#if characters.length > 3}
	<div class="show-more-container">
		<button
			bind:this={button}
			onclick={() => (buttonClosed = !buttonClosed)}
			onmouseout={blur}
			onblur={blur}
			class="show-more-btn"
		>
			{#if !buttonClosed}
				<div class="translatable-icon-top button-icon">
					<ArrowUpCircleIcon width="48px" height="48px" viewBox="0 -1 24 24" />
				</div>
				<div class="appearing-text">Show {buttonClosed ? "more" : "less"}!</div>
			{:else}
				<div class="appearing-text">Show {buttonClosed ? "more" : "less"}!</div>
				<div class="translatable-icon-bottom button-icon">
					<ArrowDownCircleIcon width="48px" height="48px" viewBox="0 -1 24 24" />
				</div>{/if}
		</button>
	</div>
{/if}

<style>
	.show-more-btn {
		margin-top: 15px;
		margin-bottom: 15px;

		height: 50px;
		width: 50px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		cursor: pointer;
		transition-duration: 0.3s;
		overflow: hidden;
		position: relative;

		border-radius: 50px;
		border-style: solid;

		color: var(--btn-text-colour);
		background-color: var(--btn-background-colour);
		border-color: var(--btn-border-colour);
	}
	.show-more-btn .appearing-text {
		font-size: 0px;
		transition-duration: 0.3s;
		align-items: center;
		justify-content: center;
	}
	.show-more-btn .button-icon {
		transition-duration: 0.3s;
		opacity: 1;
		filter: brightness(0) saturate(100%) invert(92%) sepia(13%) saturate(140%) hue-rotate(242deg)
			brightness(89%) contrast(82%);
	}
	.show-more-btn:hover,
	.show-more-btn:focus-within {
		width: 150px;
		transition-duration: 0.3s;
		align-items: center;
	}
	.show-more-btn:hover .appearing-text,
	.show-more-btn:focus-within .appearing-text {
		font-size: 18px;
		transition-duration: 0.3s;
		align-items: center;
	}
	.show-more-btn:hover .button-icon,
	.show-more-btn:focus-within .button-icon {
		opacity: 0;
		height: 0em;
		transition-duration: 0.3s;
	}
	.show-more-btn:hover .translatable-icon-bottom,
	.show-more-btn:focus-within .translatable-icon-bottom {
		transform: translateY(50px);
	}
	.show-more-btn:hover .translatable-icon-top,
	.show-more-btn:focus-within .translatable-icon-top {
		transform: translateY(-50px);
	}
	.show-more-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
