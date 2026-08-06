<script lang="ts">
	import "greset/greset.css";
	import "$lib/style.css";
	import AlertCircleIcon from "~icons/line-md/alert-circle";
	import AlertIcon from "~icons/line-md/alert";
	import AlertSquareIcon from "~icons/line-md/alert-square";
	let { errorTitle, errorMessage, errorLink, errorLinkText, severeness } = $props();
</script>

<div class="error-box-container">
	<div class="error-div">
		<div class="error-icon-container">
			<div class="error-icon-div">
				{#if severeness === "0"}
					<AlertCircleIcon
						filter="brightness(0) saturate(100%) invert(61%) sepia(67%) saturate(6217%) hue-rotate(180deg) brightness(106%) contrast(106%)"
						width="80px"
						height="80px"
						viewBox="0 -1.5 24 24"
					/>
				{:else if severeness === "1"}
					<AlertIcon
						filter="brightness(0) saturate(100%) invert(72%) sepia(90%) saturate(2937%) hue-rotate(1deg)
			brightness(105%) contrast(103%)"
						width="80px"
						height="80px"
						viewBox="0 0 24 24"
					/>
				{:else}
					<AlertSquareIcon
						filter="brightness(0) saturate(100%) invert(18%) sepia(55%) saturate(5885%) hue-rotate(0deg) brightness(110%) contrast(106%)"
						width="80px"
						height="80px"
						viewBox="0 -1.5 24 24"
					/>
				{/if}
			</div>
		</div>
		<div class="error-data">
			<h2>{errorTitle}</h2>
			<p>{errorMessage}</p>
			<div class="error-link link-underline"><a href={errorLink}>{errorLinkText}</a></div>
		</div>
	</div>
</div>

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
		width: 400px;
		background-color: var(--box-background-colour);
		padding: 20px;
		font-size: 25px;
		overflow: hidden;
	}

	.error-box-container .error-data {
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
		margin-bottom: 20px;
	}
	.error-box-container .error-icon-div {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 90px;
		height: 90px;

		background-color: var(--box-background-icon);
		border-radius: 100%;
	}

	.error-box-container p {
		font-size: 20px;
	}

	@media (max-width: 530px) {
		.error-box-container .error-div {
			width: 280px;
		}
	}
</style>
