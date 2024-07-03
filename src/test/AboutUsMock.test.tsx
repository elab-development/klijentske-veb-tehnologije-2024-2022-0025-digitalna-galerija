import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AboutUs from '../components/AboutUs';

// Mock funkcija za filterTeamByDepartment
const mockFilterTeamByDepartment = jest.fn();

jest.mock('./AboutUs', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    filterTeamByDepartment: mockFilterTeamByDepartment,
  })),
}));

describe('AboutUs component', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Resetujemo sve mock-ove posle svakog testa
  });

  test('Prikazuje sve članove tima na početku', () => {
    const { getByText } = render(<AboutUs />);
    
    // Provera da li su svi članovi tima prikazani na početku
    expect(getByText('Jana Ostojić')).toBeInTheDocument();
    expect(getByText('Kristina Pantelić')).toBeInTheDocument();
    expect(getByText('Emilija Nikolić')).toBeInTheDocument();
  });

  test('Filtrira članove tima po departmanu kada se klikne na dugme', () => {
    const { getByText } = render(<AboutUs />);
    
    // Klik na dugme za filtriranje po Marketingu
    fireEvent.click(getByText('Marketing'));
    
    // Provera da li je mock funkcija filterTeamByDepartment pozvana sa odgovarajućim argumentom
    expect(mockFilterTeamByDepartment).toHaveBeenCalledWith('Marketing');
  });
});
