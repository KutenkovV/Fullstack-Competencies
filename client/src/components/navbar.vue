<script lang="ts" setup>
import { RouterLink } from 'vue-router'

</script>
<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid p-0">
            <button class="navbar-toggler m-2" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/education" active-class="active" class="nav-link">
                            <a>Образовательные программы</a>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/correction" active-class="active" class="nav-link">
                            <a>Замечания</a>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/indicator" active-class="active" class="nav-link">
                            <a>Наполненость индикаторов</a>
                        </RouterLink>
                    </li>
                </ul>
                <button class="btn btn-outline-success" type="submit">Войти</button>
            </div>
        </div>
    </nav>
    <hr class="m-0" />
</template>

<style lang="scss" scoped>
nav {
    padding-inline: 10%;

    .nav-item {
        cursor: pointer;

        .nav-link {
            margin-inline: 0.25rem;
            border-radius: 5px;
        }

        .active {
            background-color: #d1e7dd;
        }

        &:hover {
            color: #d1e7dd;
        }
    }
}
</style>