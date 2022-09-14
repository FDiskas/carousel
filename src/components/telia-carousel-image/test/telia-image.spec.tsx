import { newSpecPage } from '@stencil/core/testing';
import { TeliaImage } from '../telia-image';

describe('telia-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TeliaImage],
      html: `<telia-image></telia-image>`,
    });
    expect(page.root).toEqualHtml(`
      <telia-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </telia-image>
    `);
  });
});
