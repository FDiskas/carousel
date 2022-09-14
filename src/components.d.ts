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
}
declare global {
    interface HTMLTeliaCarouselElement extends Components.TeliaCarousel, HTMLStencilElement {
    }
    var HTMLTeliaCarouselElement: {
        prototype: HTMLTeliaCarouselElement;
        new (): HTMLTeliaCarouselElement;
    };
    interface HTMLElementTagNameMap {
        "telia-carousel": HTMLTeliaCarouselElement;
    }
}
declare namespace LocalJSX {
    interface TeliaCarousel {
        "height"?: number;
        "width"?: number;
    }
    interface IntrinsicElements {
        "telia-carousel": TeliaCarousel;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "telia-carousel": LocalJSX.TeliaCarousel & JSXBase.HTMLAttributes<HTMLTeliaCarouselElement>;
        }
    }
}
