<template>
	<div class="card" v-if="country">
		<div class="card-header" :class="randomColor">
			<p class="header-label">Country</p>
			<h1 class="header-title">{{ country?.name?.common }}</h1>
			<p class="header-subtitle">{{ country?.name?.official }}</p>
		</div>

		<div class="section border-bottom" v-for="[key,value] in Object.entries(country?.name?.nativeName)">
			<p class="section-label">Native name</p>
			<p class="section-value">{{ value.official }}</p>
			<p class="section-secondary">
				{{ value.common }}
				<span class="badge">{{key}}</span>
			</p>
		</div>

		<div class="section border-bottom">
			<p class="section-label">Capital</p>
			<p class="section-value">{{ country?.capital[0] }}</p>
		</div>

		<div class="section">
			<p class="section-label">Currency</p>
			<div class="flex flex-col items-center" v-for="[key, value] in Object.entries(country?.currencies)">
				<div class="symbol" :class="randomColor">{{ value.symbol }}</div>
				<div>
					<p class="currency-name">{{ value.name }}</p>
					<p class="currency-code">{{ key }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted } from 'vue';
import { computed, watch } from 'vue';
import { ref } from 'vue'
import {compRandomColor} from '@/composables/randomColor'

const props = defineProps({
	data: {type: Object, default: () => []}
})

const country = computed(() => {
	return props.data[0]
})

const randomColor = ref('')

const handleRandomColor = () => {
	randomColor.value = compRandomColor()
}

// TODO: Fixed random key on name common and currencies to be displayed

onMounted(() => handleRandomColor())
watch(country, () => {
	handleRandomColor()
})
</script>

<style scoped>
.card {
	max-width: 420px;
	background: #fff;
	border: 0.5px solid #e0e0e0;
	border-radius: 12px;
	overflow: hidden;
}

.card-header {
	padding: 1.5rem 1.25rem 1rem;
}

.header-label {
	font-size: 11px;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 0.08em;
	margin: 0 0 4px;
}

.header-title {
	font-size: 22px;
	font-weight: 500;
	margin: 0 0 2px;
}

.header-subtitle {
	font-size: 13px;
	margin: 0;
}

.section {
	padding: 1rem 1.25rem;
}

.border-bottom {
	border-bottom: 0.5px solid #e0e0e0;
}

.section-label {
	font-size: 11px;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 0.08em;
	color: #888;
	margin: 0 0 6px;
}

.section-value {
	font-size: 15px;
	color: #1a1a1a;
	margin: 0 0 2px;
}

.section-secondary {
	font-size: 13px;
	color: #888;
	margin: 0;
}

.badge {
	font-size: 11px;
	background: #f5f5f5;
	border: 0.5px solid #e0e0e0;
	border-radius: 4px;
	padding: 1px 6px;
	margin-left: 4px;
}

.currency-row {
	display: flex;
	align-items: center;
	gap: 12px;
}

.symbol {
	width: 36px;
	height: 36px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 15px;
	font-weight: 500;
}

.currency-name {
	font-size: 14px;
	font-weight: 500;
	color: #1a1a1a;
	margin: 0;
}

.currency-code {
	font-size: 12px;
	color: #888;
	margin: 0;
}

/* Color palettes */
.teal {
	background: #1D9E75;
	color: #E1F5EE;
}

.blue {
	background: #378ADD;
	color: #E6F1FB;
}

.coral {
	background: #D85A30;
	color: #FAECE7;
}

.purple {
	background: #7F77DD;
	color: #EEEDFE;
}

.pink {
	background: #D4537E;
	color: #FBEAF0;
}

.amber {
	background: #BA7517;
	color: #FAEEDA;
}

.green {
	background: #639922;
	color: #EAF3DE;
}

.gray {
	background: #888780;
	color: #F1EFE8;
}
</style>