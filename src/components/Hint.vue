<template>
    <div class="hint">
        <div class="hint-inner">
            <slot/>
            <button class="closeHint" @click="TogglePopup()">Close</button>
        </div>
    </div>
</template>

<script>
export default {
	props: ['TogglePopup']
}
</script>

<style scoped>
.hint {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.2);
	
	display: flex;
	align-items: center;
	justify-content: center;
}
.hint-inner {
	background: #FFF;
	padding: 32px;
    width: 100%;
}
.closeHint {
    appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #00BCD4;
  color: #2d213f;
  font-weight: 700;
  font-size: 1.2rem;
  display: inline-block;
}
</style>