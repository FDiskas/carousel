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
          <picture class="telia-image">
            <source media="(max-width:599px)">
            <source media="(max-width:1023px)">
            <img style="width: 100%; height: inherit;">
          </picture>
        </mock:shadow-root>
      </telia-image>
    `);
  });
});
