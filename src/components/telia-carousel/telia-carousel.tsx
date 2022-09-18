import { Component, Element, Host, h, Prop, State, Listen } from '@stencil/core';
import { postfixDimensions } from '../../utils/utils';

@Component({
  tag: 'telia-carousel',
  styleUrl: 'telia-carousel.scss',
  shadow: true,
})
export class TeliaCarousel {
  @Element() el: HTMLElement;

  @Prop() width: string = '100%';

  @Prop() height: string = 'inherit';

  @Prop() slideShowDelay = 5000;

  @State() activePageNode?: Element;

  private observer: IntersectionObserver;

  private initiallyActivePage?: Element;

  @State() timerId?: number;

  @Listen('mouseover', {})
  private mouseOver(_event): void {
    window.clearInterval(this.timerId);
  }

  @Listen('mouseout', {})
  private mouseOut(_event): void {
    window.clearInterval(this.timerId);

    if (window.location.hash === '') {
      this.timerId = window.setInterval(this.activateNextPage, this.slideShowDelay);
    }
  }

  @Listen('hashchange', { target: 'window' })
  private hashChange(_event): void {
    this.slideToActivePage();
  }

  connectedCallback(): void {
    this.initiallyActivePage = this.el.querySelector('.active') ?? Array.from(this.carouselItems).find(Boolean);

    if (this.initiallyActivePage != null && window.location.hash === '') {
      window.clearInterval(this.timerId);
      this.timerId = window.setInterval(this.activateNextPage, 5000);
    }
  }

  disconnectedCallback(): void {
    window.clearInterval(this.timerId);
  }

  componentDidLoad(): void {
    this.observer = new IntersectionObserver(this.onIntersection, { threshold: [0.3] });

    Array.from(this.carouselItems).forEach(el => this.observer.observe(el));

    if (this.initiallyActivePage != null && window.location.hash !== '') {
      this.initiallyActivePage = undefined;

      this.slideToActivePage();
    }
  }

  private readonly onIntersection = (entries: IntersectionObserverEntry[]): void => {
    if (entries[0].isIntersecting) {
      if (this.initiallyActivePage != null) {
        this.activePageNode = this.initiallyActivePage;
        this.initiallyActivePage = undefined;
      } else {
        this.activePageNode = entries[0].target;
      }
    }
  };

  slideToActivePage = (): void => {
    if (window.location.hash !== '') {
      Array.from(this.carouselItems).forEach(el => {
        if (`#${el.id}` === window.location.hash) {
          return el.scrollIntoView();
        }
      });
    } else {
      this.activePageNode?.scrollIntoView();
    }
  };

  private get totalPages(): number {
    return this.el.childElementCount;
  }

  private get currentPage(): number {
    const numberFromId = this.activePageNode?.id.split('-')[1];

    if (numberFromId !== undefined) {
      return parseInt(numberFromId);
    }

    return 0;
  }

  private getIdByPage(page: number): string {
    return `${(this.activePageNode?.id ?? '').split('-')[0]}-${page}`;
  }

  private get carouselItems(): HTMLCollection {
    return this.el.children;
  }

  private get styles(): { [key: string]: string | undefined } {
    const width = postfixDimensions(this.width);
    const height = postfixDimensions(this.height);

    return {
      'max-width': width,
      height,
    };
  }

  private readonly activateNextPage = (): void => {
    if (this.carouselItems.length <= this.currentPage + 1) {
      this.activePageNode = this.carouselItems[0];
    } else {
      this.activePageNode = this.carouselItems[this.currentPage + 1];
    }

    this.slideToActivePage();
  };

  render() {
    return (
      <Host>
        <div class="container" style={this.styles}>
          <div class="slider">
            <slot></slot>
          </div>
          <ul class="pagination">
            {[...Array(this.totalPages).keys()].map(page => (
              <a class={`page${page === this.currentPage ? ' active' : ''}`} href={`#${this.getIdByPage(page)}`}>
                page {page + 1}
              </a>
            ))}
          </ul>
        </div>
      </Host>
    );
  }
}
