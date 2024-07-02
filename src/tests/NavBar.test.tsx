
import { render, fireEvent } from '@testing-library/react';
import NavBar from '../components/NavBar';

test('toggleDarkMode adds/removes dark-mode class to body', () => {
  const { getByText } = render(
    <NavBar
      imageSrcPath="path/to/image"
      navItems={[{ path: '/', name: 'Home' }, { path: '/about', name: 'About' }]}
    />
  );

  const toggleButton = getByText('Change to Dark Mode');

  // Provera početnog stanja: da li je dark-mode klasa na telu dokumenta
  expect(document.body.classList.contains('dark-mode')).toBe(false);

  // Klik na dugme za promenu moda
  fireEvent.click(toggleButton);

  // Provera da li se klasa dark-mode dodaje na telo dokumenta
  expect(document.body.classList.contains('dark-mode')).toBe(true);

  // Klik ponovo na dugme za promenu moda
  fireEvent.click(toggleButton);

  // Provera da li se klasa dark-mode uklanja sa tela dokumenta
  expect(document.body.classList.contains('dark-mode')).toBe(false);
});
