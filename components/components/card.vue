<template>
  <div class="h-[380px] min-w-[315px] max-w-[440px] w-full">
    <div class="bg-[#D1D5DB] w-full h-[222px]"></div>
    <div class="bg-[#FFFFFF] w-full h-[158px] px-4 py-3 gap-3 flex flex-col hover:h-[286px] hover:translate-y-[-128px] transition-all">
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-col gap-1">
          <span class="text-[14px] font-normal text-[#6B7280]">Subheader</span>
          <span class="text-[20px] font-medium">Header</span>
        </div>
        <span class="text-[18px] font-medium">Text</span>
      </div>
      <base-button class="hover:opacity-0 transition-opacity">Button</base-button>
      <span class="text-[12px] font-normal text-[#6B7280] text-center hover:opacity-0 transition-opacity">Sub text</span>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>