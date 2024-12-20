<script setup>
import logo from "@/assets/logo.svg"
import SortAlfa from "@/assets/Sort_alfa.svg"
import {ref} from 'vue'

const lang= ref(["Spanish","English","French"])
</script>

<template>
    <div id="container">
        <div style="text-align: center;">
            <img  :src="logo"/>
        </div>
        <div id="inner-container">
            <div class="card">
                <div class="card-header">
                    <button>Detect Language</button>
                    <button v-for="l in lang">{{ l }}</button>
                </div>
                <hr>
                <div class="card-body">
                    <input  class="text"/>
                    <p>0/500</p>
                </div>
                <div class="card-footer">
                    <button class="listen"/>
                    <button class="copy"></button>
                    <button><img :src="SortAlfa" alt="">Translate</button>
                </div>
            </div>
            <div class="card"> 
                <div class="card-header">
                    <button v-for="l in lang">{{ l }}</button>
                    <button id="change"></button>
                </div>
                <hr>
                <div class="card-body">
                    <p class="text"></p>
                </div>
                <div class="card-footer">
                    <button class="listen"/>
                    <button class="copy"></button>
                </div>
            </div>          
        </div>
    </div>
</template>

<style scoped>
    button{
        font-size: 16px;
        height: 90;
    }
    #container{
        border: solid green 1px;
        height: 500px;
        padding: 5%;
    }
    #change{
        background-image: url('assets/Horizontal_top_left_main.svg');
        background-size: cover;
    }
    .copy{
        background-image: url('assets/Copy.svg');
        background-size: cover;
    }
    .card{
        border: solid blue 1px;
        border-radius: 30px;
        flex-grow: 1;
        padding: 20px;
    }

    .card:nth-child(1){
        background-color: #212936cc;
    }
    .card:nth-child(2){
        background-color: #121826cc;
    }
    .card-header{
        border: solid red 1px;
        height: 10%;
        gap: 20px;
    }
    .card-body{
        border: solid red 1px;
        height: 70%;
    }
    .card-footer{
        border: solid red 1px;
        height: 15%;
    }
    #inner-container{
        border: solid red 1px;
        display: flex;
        flex-direction: row;
        gap: 20px;
        height: 90%;
        width: 100%;
    }
    .listen{
        background-image: url('assets/sound_max_fill.svg');
        background-size: cover;
    }
    .text{
        height: 85%;
        width: 99%;
    }
</style>
