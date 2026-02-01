import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error?: unknown;
};

export default class AppErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: unknown): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown, info: unknown) {
    // Keep a reliable signal in the console for debugging.
    console.error("[AppErrorBoundary]", error, info);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <div className="w-full max-w-xl rounded-lg border bg-card p-6 shadow-sm">
          <h1 className="text-xl font-semibold">Er ging iets mis</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Er is een fout opgetreden tijdens het renderen. Herlaad de pagina of probeer opnieuw.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={this.handleReload}>Pagina herladen</Button>
            <Button variant="secondary" onClick={this.handleReset}>
              Opnieuw proberen
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
