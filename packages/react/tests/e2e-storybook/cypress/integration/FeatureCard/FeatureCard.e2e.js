/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Sets the correct path for the medium variation
 *
 * @type {string}
 * @private
 */
const _pathMedium = '/iframe.html?id=components-feature-card--default';

/**
 * Sets the correct path for the large variation
 *
 * @type {string}
 * @private
 */
const _pathLarge = '/iframe.html?id=components-feature-card--large';

/* eslint-disable cypress/no-unnecessary-waiting */
describe('Feature Card | medium', () => {
  beforeEach(() => {
    cy.visit(`/${_pathMedium}`);
    cy.viewport(1280, 780);
  });

  it('should check for link', () => {
    cy.get('.bx--feature-card a.bx--link').then($link => {
      const url = $link.prop('href');
      expect(url).not.to.be.empty;
    });
    cy.screenshot();
  });

  it("should check that the footer's pseudo class takes up entire card to be clickable", () => {
    cy.get('.bx--feature-card a.bx--link').then($els => {
      const win = $els[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($els[0], ':after');
      const positionValue = after.getPropertyValue('position');
      const insetValue = after.getPropertyValue('inset');

      expect(positionValue).to.eq('absolute');
      expect(insetValue).to.eq('0px');
    });
  });

  it('should have image on the left and content on the right side of the card', () => {
    // TODO: currently React's FeatureCard stories aren't left aligned,
    // update these values when they become as such

    // image takes the left half
    cy.get('.bx--image').then($image => {
      expect($image[0].getBoundingClientRect().left).to.equal(344);
      expect($image[0].getBoundingClientRect().right).to.equal(640);
    });

    // image takes the right half
    cy.get('.bx--card__wrapper').then($content => {
      expect($content[0].getBoundingClientRect().left).to.equal(640);
      expect($content[0].getBoundingClientRect().right).to.equal(936);
    });
  });

  it('should load the g10 theme', () => {
    cy.visit(`/${_pathMedium}&theme=g10`);
    cy.viewport(1280, 780);

    cy.window().then(win => {
      win.document.documentElement.setAttribute(
        'storybook-carbon-theme',
        'g10'
      );

      cy.screenshot();
      cy.percySnapshot('FeatureCard medium | g10 theme', {
        widths: [1280],
      });
    });
  });

  it('should load the g90 theme', () => {
    cy.visit(`/${_pathMedium}&theme=g90`);
    cy.viewport(1280, 780);

    cy.window().then(win => {
      win.document.documentElement.setAttribute(
        'storybook-carbon-theme',
        'g90'
      );

      cy.screenshot();
      cy.percySnapshot('FeatureCard medium | g90 theme', {
        widths: [1280],
      });
    });
  });

  it('should load the g100 theme', () => {
    cy.visit(`/${_pathMedium}&theme=g100`);
    cy.viewport(1280, 780);

    cy.window().then(win => {
      win.document.documentElement.setAttribute(
        'storybook-carbon-theme',
        'g100'
      );

      cy.screenshot();
      cy.percySnapshot('FeatureCard medium | g100 theme', {
        widths: [1280],
      });
    });
  });
});

describe('FeatureCard medium (mobile)', () => {
  beforeEach(() => {
    cy.visit(`/${_pathMedium}`);
    cy.viewport(320, 780);
  });

  it('should check for link', () => {
    cy.get('.bx--feature-card a.bx--link').then($link => {
      const url = $link.prop('href');
      expect(url).not.to.be.empty;
    });
    cy.screenshot();
  });

  it("should check that the footer's pseudo class takes up entire card to be clickable", () => {
    cy.get('.bx--feature-card a.bx--link').then($els => {
      const win = $els[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($els[0], ':after');
      const positionValue = after.getPropertyValue('position');
      const insetValue = after.getPropertyValue('inset');

      expect(positionValue).to.eq('absolute');
      expect(insetValue).to.eq('0px');
    });
  });
});

describe('FeatureCard | large', () => {
  beforeEach(() => {
    cy.visit(`/${_pathLarge}`);
    cy.viewport(1400, 780);
  });

  it('should check for link', () => {
    cy.get('.bx--feature-card-large a.bx--link').then($link => {
      const url = $link.prop('href');
      expect(url).not.to.be.empty;
    });
    cy.screenshot();
  });

  it("should check that the footer's pseudo class takes up entire card to be clickable", () => {
    cy.get('.bx--feature-card-large a.bx--link').then($els => {
      const win = $els[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($els[0], ':after');
      const positionValue = after.getPropertyValue('position');
      const insetValue = after.getPropertyValue('inset');

      expect(positionValue).to.eq('absolute');
      expect(insetValue).to.eq('0px');
    });
  });

  it('should have eyebrow, heading, and copy content', () => {
    cy.get('.bx--card__eyebrow')
      .invoke('text')
      .should('not.be.empty');
    cy.get('.bx--card__heading')
      .invoke('text')
      .should('not.be.empty');
    cy.get('.bx--card__copy')
      .invoke('text')
      .should('not.be.empty');
  });

  it('should have image on the left and content on the right half of the card', () => {
    // TODO: currently React's FeatureCard stories aren't left aligned,
    // update these values when they become as such

    // image takes the left half
    cy.get('.bx--image').then($image => {
      expect($image[0].getBoundingClientRect().left).to.equal(187);
      expect($image[0].getBoundingClientRect().right).to.equal(700);
    });

    // image takes the right half
    cy.get('.bx--card__wrapper').then($content => {
      expect($content[0].getBoundingClientRect().left).to.equal(700);
      expect($content[0].getBoundingClientRect().right).to.equal(1213);
    });
  });

  it('should load the g10 theme', () => {
    cy.visit(`/${_pathLarge}&theme=g10`);
    cy.viewport(1280, 780);

    cy.window().then(win => {
      win.document.documentElement.setAttribute(
        'storybook-carbon-theme',
        'g10'
      );

      cy.screenshot();
      cy.percySnapshot('FeatureCard medium | g10 theme', {
        widths: [1280],
      });
    });
  });

  it('should load the g90 theme', () => {
    cy.visit(`/${_pathLarge}&theme=g90`);
    cy.viewport(1280, 780);

    cy.window().then(win => {
      win.document.documentElement.setAttribute(
        'storybook-carbon-theme',
        'g90'
      );

      cy.screenshot();
      cy.percySnapshot('FeatureCard medium | g90 theme', {
        widths: [1280],
      });
    });
  });

  it('should load the g100 theme', () => {
    cy.visit(`/${_pathLarge}&theme=g100`);
    cy.viewport(1280, 780);

    cy.window().then(win => {
      win.document.documentElement.setAttribute(
        'storybook-carbon-theme',
        'g100'
      );

      cy.screenshot();
      cy.percySnapshot('FeatureCard medium | g100 theme', {
        widths: [1280],
      });
    });
  });
});

describe('FeatureCard large (mobile)', () => {
  beforeEach(() => {
    cy.visit(`/${_pathLarge}`);
    cy.viewport(320, 780);
  });

  it('should check for link', () => {
    cy.get('.bx--feature-card-large a.bx--link').then($link => {
      const url = $link.prop('href');
      expect(url).not.to.be.empty;
    });

    cy.screenshot();
  });

  it("should check that the footer's pseudo class takes up entire card to be clickable", () => {
    cy.get('.bx--feature-card-large a.bx--link').then($els => {
      const win = $els[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($els[0], ':after');
      const positionValue = after.getPropertyValue('position');
      const insetValue = after.getPropertyValue('inset');

      expect(positionValue).to.eq('absolute');
      expect(insetValue).to.eq('0px');
    });
  });
});
