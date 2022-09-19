/*
 * Navbar Messages
 *
 * This contains all the text for the Navbar component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'mini-project.components.Navbar';

export default defineMessages({
  navHome: {
    id: `${scope}.home`,
    defaultMessage: 'Trang chủ',
  },
  navAbout: {
    id: `${scope}.about`,
    defaultMessage: `
      Thông tin
    `,
  },
  navLink: {
    id: `${scope}.link`,
    defaultMessage: 'Liên kết',
  },
});
