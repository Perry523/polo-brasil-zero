<template>
  <section class="pt-16 pb-12" id="netzeroRef">
    <div class="wrapper-full flex flex-col items-center">
      <div class="flex items-center max-lg:flex-col">
        <div class="flex flex-col max-lg:text-center">
         
          <p
            className="mt-2 max-lg:text-center xl:pr-28 2xl:pr-60 text-green-800"
          >
          <h2 class="lg:w-80 xl:w-auto text-green-800 text-center mb-5">
            Net-Zero <br />
            <h3 class="text-green-800">{{$t('netZero.subtitle')}}</h3>
          </h2>
            {{$t('netZero.text')}}
            <br />
            <br />
           {{$t('netZero.subtext')}}
            <br />
            <br />
            <b className="text-green-800 inline">Escopo 1: </b>
            {{ $t('netZero.escopo1')  }}
            <br />
            <br />
            <b className="text-green-800 inline">Escopo 2: </b>
            {{ $t('netZero.escopo2')  }}
            <br />
            <br />
            <b className="text-green-800 inline">Escopo 3: </b>
            {{ $t('netZero.escopo3')  }}
            <br />
            <br />
            {{ $t('netZero.escopo4')  }}
          </p>
        </div>
        <div
          class="lg:w-[450px] lg:h-[340px] shrink-0 ml-20 relative flex justify-center items-center max-lg:mt-5 max-lg:w-full max-lg:ml-0 flex-col"
        >
          <span class="text-green-800 mt-4 font-bold text-center">
            {{ $t('netZero.projection') }}
          </span>
          <img src="/images/netzero.gif" alt="" class="rounded-3xl mt-4" />
          <span class="text-green-800 mt-2">
            Fonte: NASA Scientific Visualization Studio
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* seus estilos aqui */
</style>
