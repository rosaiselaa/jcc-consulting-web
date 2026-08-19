import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Technology from '@/pages/Technology';
import Leadership from '@/pages/Leadership';
import Contact from '@/pages/Contact';
import { Chatbot } from '@/components/Chatbot';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicios" component={Services} />
      <Route path="/tecnologia" component={Technology} />
      <Route path="/liderazgo" component={Leadership} />
      <Route path="/contacto" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
        <Chatbot />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
