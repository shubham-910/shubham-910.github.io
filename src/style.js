const styles = {
  boxWidth: "xl:max-w-[1200px] w-full mx-auto",
  heading2:
    "font-display font-bold xs:text-[48px] text-[40px] text-heading xs:leading-[1.1] leading-[1.15] w-full",
  paragraph:
    "font-sans font-normal text-body text-[17px] leading-relaxed",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexEnd: "flex md:justify-end items-center",

  paddingX: "sm:px-8 lg:px-12 px-5",
  paddingY: "sm:py-20 py-14",
  padding: "sm:px-8 lg:px-12 px-5 sm:py-16 py-10",

  marginX: "sm:mx-8 mx-5",
  marginY: "sm:my-16 my-8",
};

export const layout = {
  section: `flex md:flex-row flex-col gap-10 md:gap-16 ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse gap-10 md:gap-16 ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-6 mr-0 md:mt-0 mt-8 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-6 ml-0 md:mt-0 mt-8 relative`,
  sectionImgReverseEnd: `flex-1 flex ${styles.flexEnd} md:mr-8 ml-4 mb-4 md:mb-0 md:mt-0 mt-8 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
