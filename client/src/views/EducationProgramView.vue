<script lang="ts" setup>
import axios from "axios";
import { onBeforeMount, ref, toValue } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
let dataSubject = ref()
let dataTitle = ref()
const dataUpdate = ref();

const title = ref("");
const knowledge = ref("");
const skills = ref("");
const abilities = ref("");

const titleU = ref("");
const knowledgeU = ref("");
const skillsU = ref("");
const abilitiesU = ref("");

onBeforeMount(() => {
    getRes();
    getEducationList()
})

async function getRes() {
    const rest = await axios.get('/api/educational-program/subject/' + route.params.id)
    dataSubject.value = rest.data;
}

async function getEducationList() {
    const res = await axios.get("/api/educational-program/getProgramm/" + route.params.id)
    dataTitle.value = res.data;
}

async function onSubCreate() {
    await axios.post("/api/list-of-disciplines/create", {
        educational_program_id: route.params.id,
        title: title.value,
        knowledge: knowledge.value,
        skills: skills.value,
        abilities: abilities.value
    })
    getRes();
}

async function onSubDelete(id: number) {
    await axios.delete("/api/list-of-disciplines/delete/" + id)
    getRes();
}

const idU = ref()
async function onGetDiscipline(id: number) {
    let res = await axios.get("/api/list-of-disciplines/getDiscipline/" + id)
    titleU.value = res.data[0].title
    knowledgeU.value = res.data[0].knowledge
    skillsU.value = res.data[0].skills
    abilitiesU.value = res.data[0].abilities
    idU.value = id
}

async function onUpdateDiscipline() {
    await axios.put("/api/list-of-disciplines/updateDiscipline/" + idU.value, {
        id: idU.value,
        title: titleU.value,
        knowledge: knowledgeU.value,
        skills: skillsU.value,
        abilities: abilitiesU.value
    })
    getRes();
}

const idC = ref()
const remarkC = ref()

async function OnCreateCorrection() {
    await axios.post("/api/correction-list/create", {
        list_of_disciplines_id: idC.value,
        remark: remarkC.value,
    })
    getRes();
}

// const dataCorrection
async function getCorrection(id: number) {
    let res = await axios.get("/api/list-of-disciplines/correction/" + id)
}


</script>
<template>
    <router-link :to=" '/education' ">
        <p class="m-0">Вернуться назад</p>
    </router-link>

    <div class="d-flex align-items-center"
        v-for="(item, index) in dataTitle"
        :key=" index ">
        <h1>{{ item.code }}</h1>
        <h2 class="ms-2">{{ item.title }}</h2>
    </div>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Добавить дисциплину
    </button>

    <!-- Modal create -->
    <div class="modal fade" id="staticBackdrop" data-bs-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content" @submit.prevent="onSubCreate()">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Создать дисциплину</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Наименование</label>
                        <input v-model=" title " required type="text" class="form-control"
                            placeholder="Введите наименование">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Знания</label>
                        <textarea v-model=" knowledge " class="form-control" id="exampleFormControlTextarea1"
                            rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Умения</label>
                        <textarea v-model=" skills " class="form-control" id="exampleFormControlTextarea1"
                            rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Навыки</label>
                        <textarea v-model=" abilities " class="form-control" id="exampleFormControlTextarea1"
                            rows="3"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">отменить</button>
                    <button type="submit" class="btn btn-primary">Создать</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal update -->
    <div class="modal fade" id="staticBackdrop-2" data-bs-keyboard="true" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content" @submit.prevent="onUpdateDiscipline()">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Редактировать дисциплину</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Наименование</label>
                        <input v-model=" titleU " required type="text" class="form-control"
                            placeholder="Введите наименование">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Знания</label>
                        <textarea v-model=" knowledgeU " class="form-control" id="exampleFormControlTextarea1"
                            rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Умения</label>
                        <textarea v-model=" skillsU " class="form-control" id="exampleFormControlTextarea1"
                            rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Навыки</label>
                        <textarea v-model=" abilitiesU " class="form-control" id="exampleFormControlTextarea1"
                            rows="3"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">отменить</button>
                    <button type="submit" class="btn btn-primary">Сохранить</button>
                </div>
            </form>
        </div>
    </div>

        <!-- Modal correction -->
        <div class="modal fade" id="staticBackdrop-3" data-bs-keyboard="true" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content" @submit.prevent="OnCreateCorrection()">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Оставить замечание</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Введите замечание</label>
                        <textarea v-model=" remarkC " required class="form-control" id="exampleFormControlTextarea1"
                            rows="3"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">отменить</button>
                    <button type="submit" class="btn btn-primary">Сохранить</button>
                </div>
            </form>
        </div>
    </div>

    <h4 class="modal-title mt-2 fs-4">Список дисциплин</h4>
    <hr class="m-0" />

    <div class="mt-3" v-for=" item in dataSubject" :key="item.id ">
        <div class="d-flex aligne-items-center mb-2 justify-content-between">
            <h4 class="fw-medium fs-5" style="color: #0d6efd">{{ item.title }}</h4>
            <div>
                <button @click="idC = item.id" type="submit" data-bs-toggle="modal" class="btn btn-warning me-3" data-bs-target="#staticBackdrop-3">Оставить замечание</button>
                <button @click="onGetDiscipline(item.id)" data-bs-toggle="modal" data-bs-target="#staticBackdrop-2"
                    type="submit" class="btn btn-success me-3">Редактировать</button>
                <button type="submit" @click=" onSubDelete(item.id)" class="btn btn-danger me-3">Удалить</button>
            </div>
        </div>
        <div class="card d-flex flex-column mt-1 p-1">
            <div>
                <h3 class="fs-6">Знания:</h3>
                <a>{{ item.knowledge }}</a>
                <hr>
            </div>
            <div>
                <h3 class="fs-6">Умения:</h3>
                <a>{{ item.skills }}</a>
                <hr>
            </div>
            <div>
                <h3 class="fs-6">Навыки:</h3>
                <a>{{ item.abilities }}</a>
                <hr>
            </div>
            <div>
                <h3 style="color: #ff9767;" class="fs-6">Замечания:</h3>
                <a>{{  }}</a>
            </div>
        </div>
    </div>
    <div v-if=" dataSubject.length === 0 ">
        <h4 class="modal-title mt-2">Данных нет</h4>
        <hr class="m-0" />
    </div>
</template>
<style lang="scss" scoped></style>