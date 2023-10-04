<template>
    <div class="container-fluid">
        <HeaderRow />
        <div class="row mt-4">
            <CategoryRow />

            <div class="col-12 col-md-10 mt-4 mt-md-0">
                <router-view></router-view>
            </div>
        </div>
        <FooterRow />
    </div>
</template>

<script>
import HeaderRow from "@/components/HeaderRow";
import CategoryRow from "@/components/CategoryRow";
import FooterRow from "@/components/FooterRow";

export default {
  name: 'App',
    components: { FooterRow, CategoryRow, HeaderRow }
}
</script>

<style>
</style>
