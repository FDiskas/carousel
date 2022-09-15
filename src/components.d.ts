/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TeliaCarousel {
        "height": number;
        "width": number;
    }
    interface TeliaImage {
        "alt": string;
        /**
          * Medium size image
         */
        "medium": string;
        /**
          * Small size image src
         */
        "small": string;
        /**
          * Large size image src
         */
        "src": string;
    }
}
declare global {
    interface HTMLTeliaCarouselElement extends Components.TeliaCarousel, HTMLStencilElement {
    }
    var HTMLTeliaCarouselElement: {
        prototype: HTMLTeliaCarouselElement;
        new (): HTMLTeliaCarouselElement;
    };
    interface HTMLTeliaImageElement extends Components.TeliaImage, HTMLStencilElement {
    }
    var HTMLTeliaImageElement: {
        prototype: HTMLTeliaImageElement;
        new (): HTMLTeliaImageElement;
    };
    interface HTMLElementTagNameMap {
        "telia-carousel": HTMLTeliaCarouselElement;
        "telia-image": HTMLTeliaImageElement;
    }
}
declare namespace LocalJSX {
    interface TeliaCarousel {
        "height"?: number;
        "width"?: number;
    }
    interface TeliaImage {
        "alt"?: string;
        /**
          * Medium size image
         */
        "medium"?: string;
        /**
          * Small size image src
         */
        "small"?: string;
        /**
          * Large size image src
         */
        "src"?: string;
    }
    interface IntrinsicElements {
        "telia-carousel": TeliaCarousel;
        "telia-image": TeliaImage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "telia-carousel": LocalJSX.TeliaCarousel & JSXBase.HTMLAttributes<HTMLTeliaCarouselElement>;
            "telia-image": LocalJSX.TeliaImage & JSXBase.HTMLAttributes<HTMLTeliaImageElement>;
        }
    }
}
