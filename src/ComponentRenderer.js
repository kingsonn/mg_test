import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"


import SaaSProductLandingPage from "main/LandingPage.js";



import SaaSProductLandingPageImageSrc from "images/demo/SaaSProductLandingPage.jpeg";



import LoginPage from "pages/Login.js";
import SignupPage from "pages/Signup.js";


import LoginPageImageSrc from "images/demo/LoginPage.jpeg";
import SignupPageImageSrc from "images/demo/SignupPage.jpeg";


import BackgroundAsImageHero from "components/hero/Orders.js";
import IllustrationAndInputHero from "components/hero/Hero.js";
import FullWidthWithImageHero from "components/hero/Dashboard.js";
import BackgroundAsImageWithCenteredContentHero from "components/hero/Domains.js";



import ThreeColWithSideImageFeatures from "components/features/Why.js";
import TwoColWithButtonFeatures from "components/features/Benefit.js";





import SingleColFAQS from "components/faqs/FAQ.js";



import FiveColumnDarkFooter from "components/footers/Footer.js";


export const components = {
  landingPages: {
   
    SaaSProductLandingPage: {
      component: SaaSProductLandingPage,
      imageSrc: SaaSProductLandingPageImageSrc,
      url: "/components/landingPages/SaaSProductLandingPage",
    },
   

  },

  innerPages: {
    LoginPage: {
      component: LoginPage,
      imageSrc: LoginPageImageSrc,
      scrollAnimationDisabled: true,
      url: "/components/innerPages/LoginPage",
    },
    SignupPage: {
      component: SignupPage,
      url: `/components/innerPages/SignupPage`,
      imageSrc: SignupPageImageSrc,
      scrollAnimationDisabled: true,
    },
    
  },

  blocks: {
    Hero: {
      type: "Hero Section",
      elements: {
        BackgroundAsImage: {
          name: "With Background Image",
          component: BackgroundAsImageHero,
          url: "/components/blocks/Hero/BackgroundAsImage",
        },
        IllustrationAndInput: {
          name: "With Image Illustration and Input",
          component: IllustrationAndInputHero,
          url: "/components/blocks/Hero/IllustrationAndInput",
        },
       
       
        FullWidthWithImage: {
          name: "Full Width With Image",
          component: FullWidthWithImageHero,
          url: "/components/blocks/Hero/FullWidthWithImage",
        },
        BackgroundAsImageWithCenteredContent: {
          name: "Full Width Background Image with centered content",
          component: BackgroundAsImageWithCenteredContentHero,
          url: "/components/blocks/Hero/BackgroundAsImageWithCenteredContent",
        },
       
      }
    },
   
    Features: {
      type: "Features Section",
      elements: {
        ThreeColWithSideImage: {
          name: "Three Column With Side Image",
          component: ThreeColWithSideImageFeatures,
          url: "/components/blocks/Features/ThreeColWithSideImage",
        },
         TwoColWithButton: {
          name: "Two Column With Image and Action Button",
          component: TwoColWithButtonFeatures,
          url: "/components/blocks/Features/TwoColWithButton",
        },
      
      }
    },

    FAQS: {
      type: "FAQs Section",
      elements: {
      
        SingleCol: {
          name: "Single Column",
          component: SingleColFAQS,
          url: "/components/blocks/FAQS/SingleCol",
        },
    
      }
    },

    

    

    Footer: {
      type: "Footers Section",
      elements: {
        
        FiveColumnDark: {
          name: "Five Column Dark",
          component: FiveColumnDarkFooter,
          url: "/components/blocks/Footer/FiveColumnDark",
        },
    
      }
    }
  }
}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component= components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
