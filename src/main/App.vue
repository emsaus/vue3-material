<template>
  
	<div>

    <md-button class="md-button md-raised md-theme-default md-accent">
			this is a button
		</md-button>

		<md-datepicker  :md-immediately="true" >
      <label>Datepicker</label>	
    </md-datepicker>

		<md-checkbox >
			<md-tooltip md-delay="300" md-direction="bottom" >this is a tooltip</md-tooltip>
			this is a checkbox
		</md-checkbox>
		
  </div>

</template>

<script>
	import '@/components/css/vue-material.min.css';
	import '@/components/css/default.css';
	import '@/main/css/main.css';

	import MdButton from "@/components/MdButton/MdButton.vue"
	import MdDatepicker from "@/components/MdDatepicker/MdDatepicker.vue"
	import MdTooltip from "@/components/MdTooltip/MdTooltip.vue"

	import MdCheckbox from "@/components/MdCheckbox/MdCheckbox.vue"

	export default {
		
		components: {
			MdButton,
			MdDatepicker,
			MdTooltip,
			MdCheckbox
		},
		
		name: 'app'

		
	}



</script>