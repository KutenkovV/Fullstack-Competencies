<script lang="ts" setup>
import axios from "axios";
import { onBeforeMount } from '@vue/runtime-dom';
import { ref } from "vue";

let data = ref();
const code = ref("");
const title = ref("");

onBeforeMount(() => {
    getEducationList();
})

async function onSubCreate() {
    await axios.post("api/educational-program/create", {
        code: code.value,
        title: title.value
    })
    getEducationList();
}

async function onSubDelete(id: number) {
    await axios.delete("api/educational-program/delete/" + id)
    getEducationList();
}

async function getEducationList() {
    const res = await axios.get("api/educational-program/getAll")
    data.value = res.data;
}

</script>
<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Добавить образовательную программу
    </button>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content" @submit.prevent=" onSubCreate ">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Создать образовательную программу</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Код</label>
                        <input required v-model=" code " type="text" class="form-control"
                            placeholder="Введите код образовательной программы">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Наименование</label>
                        <input required v-model=" title " type="text" class="form-control"
                            placeholder="Введите наименование">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">отменить</button>
                    <button type="submit" class="btn btn-primary">Создать</button>
                </div>
            </form>
        </div>
    </div>
    
    <h4 class="modal-title mt-2">Список образовательных программ</h4>
    <hr class="m-0" />

    <!-- v-for=" item in data" -->
    <div class="card mt-3 d-flex flex-row p-2 align-items-center justify-content-between"
        v-for="item in data" :key=" item.id ">
        <router-link :to=" 'educational-program/' + item.id ">
            <div class="d-flex flex-row align-items-center">
                <h2 class="ps-2 m-0">{{ item.code }}</h2>
                <p class="ps-2 m-0">"{{ item.title }}"</p>
            </div>
        </router-link>
        <button type="submit" @click=" onSubDelete(item.id)" class="btn btn-danger me-3">Удалить</button>
    </div>
</template>
<style lang="scss" scoped>
.card {
    &:hover {
        transition: all 0.2s;
        background-color: #d1e7dd;
        cursor: pointer;
    }
}

//style
</style>