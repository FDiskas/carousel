import { newE2EPage } from '@stencil/core/testing';

describe('telia-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<telia-image></telia-image>');

    const element = await page.find('telia-image');
    expect(element).toHaveClass('hydrated');
  });
});
