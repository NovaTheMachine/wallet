/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface OzWallet {
    }
}
declare global {
    interface HTMLOzWalletElement extends Components.OzWallet, HTMLStencilElement {
    }
    var HTMLOzWalletElement: {
        prototype: HTMLOzWalletElement;
        new (): HTMLOzWalletElement;
    };
    interface HTMLElementTagNameMap {
        "oz-wallet": HTMLOzWalletElement;
    }
}
declare namespace LocalJSX {
    interface OzWallet {
    }
    interface IntrinsicElements {
        "oz-wallet": OzWallet;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "oz-wallet": LocalJSX.OzWallet & JSXBase.HTMLAttributes<HTMLOzWalletElement>;
        }
    }
}
