import NavBar from "../components/NavBar"; // Prilagodite putanju u zavisnosti od strukture vašeg projekta
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Potrebno za Link komponentu

test("If NavBar is showing Gallery", () => {
    render(
      <BrowserRouter>
        <NavBar imageSrcPath="path/to/logo.png" navItems={[{ name: "Gallery", path: "/gallery" }]} />
      </BrowserRouter>
    );

    const message = screen.queryByText("Gallery");
    expect(message).toBeVisible();
});


