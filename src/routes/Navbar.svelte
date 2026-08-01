<script lang="ts">
	let is_navbar_closed = $state(true);
	function dropMenu() {
		is_navbar_closed = !is_navbar_closed;
	}
</script>

<div class="navbar">
	<div class="content">
		<div style="display: flex; width: 100%">
			<a href="/" style="text-decoration: none"><h3>LOGO</h3></a>
			<button class="dropdown" onclick={dropMenu}>X</button>
		</div>
		<div class="links" class:closed={is_navbar_closed}>
			<a href="characters" style="text-decoration: none"><p>Characters</p></a>
			<a href="assets" style="text-decoration: none"><p>Assets</p></a>
			<a href="/" style="text-decoration: none"><p>Button</p></a>
			<a href="/" style="text-decoration: none"><p>Button</p></a>
		</div>
	</div>
</div>

<style>
	.navbar {
		position: sticky;
		top: 0;
		background-color: lightblue;
		padding: 1rem;
		text-align: center;
	}
	.content {
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		align-items: center;
	}
	.links {
		display: flex;
		gap: 1rem;
		margin-left: auto;
	}
	.dropdown {
		margin-left: auto;
		display: none;
	}

	@media (max-width: 530px) {
		.links {
			display: flex;
			position: sticky;
			flex-direction: column;
			margin-left: auto;
			margin-right: auto;
			width: 100%;
		}
		.navbar {
			flex-direction: column;
		}
		.dropdown {
			display: block;
		}
		.content {
			display: block;
		}
		.closed {
			display: none;
		}
	}
</style>
