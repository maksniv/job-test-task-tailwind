<template>
  <div class="h-[380px] min-w-[315px] max-w-[440px] w-full group overflow-hidden bg-[#FFFFFF] xs:w-[315px] md:w-[440px]">
    <div class="bg-[#D1D5DB] w-full h-[222px] relative">
      <button class="absolute top-[12px] right-[12px] border border-[#E5E7EB] border-solid rounded-md bg-[#FFFFFF] px-[12px] py-[6px] text-[12px] leading-[16px]">button</button>
    </div>
    <div class="bg-[#FFFFFF] w-full h-[158px] px-4 py-3 gap-3 flex flex-col [&:not(:hover)]:animate-close group-hover:animate-open relative group-hover:translate-y-[-128px] group-hover:h-[286px]">
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-col gap-[4px]">
          <span class="text-[14px] font-normal text-[#6B7280] leading-[20px]">Subheader</span>
          <span class="text-[20px] font-medium leading-[24px] tracking-[.5]">Header</span>
        </div>
        <span class="text-[18px] font-medium leading-[22px]">Text</span>
      </div>
      <div class="flex flex-col gap-1 group-hover:opacity-0 group-hover:absolute top-[80px] transition-all duration-500 group-hover:w-[calc(100%-32px)]">
        <base-button class="grow">Button</base-button>
        <span class="text-[12px] font-normal text-[#6B7280] text-center">Sub text</span>
      </div>
      <div class="flex flex-col gap-[8px] border-t border-[#E5E7EB] border-solid opacity-0 group-hover:opacity-100 transition-[opacity] duration-300 pt-3">
        <div class="flex flex-row justify-between items-center">
          <span class="text-[14px] font-normal text-[#6B7280] leading-[20px]">Text</span>
          <span class="text-[14px] font-normal leading-[20px]">Link</span>
        </div>
        <div class="flex flex-row justify-between items-center">
          <span class="text-[14px] font-normal text-[#6B7280] leading-[20px]">Text</span>
          <span class="text-[14px] font-normal leading-[20px]">Link</span>
        </div>
        <div class="flex flex-row justify-between items-center">
          <span class="text-[14px] font-normal text-[#6B7280] leading-[20px]">Text</span>
          <span class="text-[14px] font-normal leading-[20px]">Link</span>
        </div>
        <div class="flex flex-row justify-between items-center">
          <span class="text-[14px] font-normal text-[#6B7280] leading-[20px]">Text</span>
          <span class="text-[14px] font-normal leading-[20px]">Link</span>
        </div>
      </div>
      <div class="flex flex-col gap-[4px] opacity-0 group-hover:opacity-100 transition-[opacity] duration-500">
        <base-button class="grow">Button</base-button>
        <span class="text-[12px] font-normal text-[#6B7280] text-center leading-[16px]">Sub text</span>
      </div>
    </div>
  </div>
</template>