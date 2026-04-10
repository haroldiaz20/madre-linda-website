import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Hero from "./Hero";

describe("Hero", () => {
  it("renders section and primary content", () => {
    render(<Hero />);
    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("hero-content")).toBeInTheDocument();
    expect(screen.getByTestId("hero-visual")).toBeInTheDocument();
    expect(screen.getByTestId("hero-globe-wrap")).toBeInTheDocument();
  });

  it("renders headline, subtitle, and CTAs", () => {
    render(<Hero />);
    expect(screen.getByTestId("hero-title")).toHaveTextContent(
      /Lo hacemos bien por/,
    );
    expect(screen.getByTestId("hero-title")).toHaveTextContent(/TI/);
    expect(screen.getByTestId("hero-subtitle")).toHaveTextContent(
      /software mas seguro y confiable/i,
    );
    expect(screen.getByTestId("hero-subtitle")).toHaveTextContent(
      /soluciones a medida/i,
    );
    expect(screen.getByTestId("hero-cta-contact")).toHaveTextContent(
      "Reserva una cita",
    );
    expect(screen.getByTestId("hero-cta-about")).toHaveTextContent(
      "Conoce al equipo",
    );
  });

  it("scrolls to contact section when primary CTA is clicked", async () => {
    window.scrollTo.mockClear();
    document.body.innerHTML = '<div id="contacto"></div>';
    render(<Hero />);

    await userEvent.click(screen.getByTestId("hero-cta-contact"));
    expect(window.scrollTo).toHaveBeenCalled();

    document.body.innerHTML = "";
  });

  it("scrolls to team section when secondary CTA is clicked", async () => {
    window.scrollTo.mockClear();
    document.body.innerHTML = '<div id="equipo"></div>';
    render(<Hero />);

    await userEvent.click(screen.getByTestId("hero-cta-about"));
    expect(window.scrollTo).toHaveBeenCalled();

    document.body.innerHTML = "";
  });
});
