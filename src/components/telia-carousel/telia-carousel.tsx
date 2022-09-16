import { Component, Element, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'telia-carousel',
  styleUrl: 'telia-carousel.scss',
  shadow: true,
})
export class TeliaCarousel {
  @Element() el: HTMLElement;

  @Prop() width = 200;

  @Prop() height = 100;

  @State() activePage = '';

  observer: IntersectionObserver;

  componentDidLoad(): void {
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.activePage = entries[0].target.id;
      }
    });

    // TODO: Check for performance
    Array.from(this.carouselItems).forEach(el => this.observer.observe(el));
  }

  private get totalPages(): number {
    return this.el.childElementCount;
  }

  private get carouselItems(): HTMLCollection {
    return this.el.children;
  }

  render() {
    return (
      <Host>
        <div class="container">
          <div class="slider">
            <slot></slot>
          </div>
          <ul class="pagination">
            {[...Array(this.totalPages).keys()].map(page => (
              // TODO: Refactor this code to not use nested template literals
              <a class={`page${this.activePage === `slide-${page}` ? ' active' : ''}`} href={`#slide-${page}`}>
                page {page + 1}
              </a>
            ))}
          </ul>
        </div>
      </Host>
    );
  }
}
