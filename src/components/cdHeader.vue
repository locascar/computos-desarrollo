<template>
    <header>
		<div class="contenedor">
			<div id="logo">
				<img src="../assets/img/vueLogo.png" alt="logo vue">
				<span id="brand">
					<strong>Curso</strong> Vue
				</span>
			</div>
			<h1 class="tituloPrincipal">
				<router-link to="/" active-class="active"><i class="bi bi-people-fill"></i>Usuarios</router-link>
			</h1>
		</div>
	</header>
</template>
<script>

export default {
    name: "cdheader-app",
}
</script>
