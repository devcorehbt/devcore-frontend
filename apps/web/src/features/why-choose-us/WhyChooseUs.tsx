import { SectionTitle } from '@devcore/ui';
import infinito from '@/assets/why-choose-us/infinito.png';
import { CardsChooseUs } from './CardsChooseUs';

export function WhyChooseUs() {
  return (
    <section className="bg-bg-primary px-6 py-16 text-text-primary md:px-16 md:py-10 lg:px-28">
      <SectionTitle
        label="MOTIVOS PARA ESCOLHER A DEVCORE"
        icon={<img src={infinito} alt="" className="h-4 w-4 object-contain" />}
        title={
          <>
            O que faz um time de desenvolvimento
            <br /> e design ser <br className="lg:hidden" />
            realmente <span className="text-purple_text">valioso?</span>
          </>
        }
      >
        <div className="space-y-1 text-text-gray-300 lg:hidden">
          <p>
            Menos desperdício de tempo e dinheiro. Soluções que realmente resolvem problemas. Sem
            achismos. Só soluções com base em dados reais.
          </p>
        </div>
        <div className="hidden space-y-1 text-text-gray-300 lg:block">
          <p>
            Menos desperdício de tempo e dinheiro.
            <br />
            Soluções reais e centradas no usuário.
          </p>
          <p>
            Sem achismos.
            <br />
            Só soluções com base em dados reais.
          </p>
        </div>
      </SectionTitle>

      <CardsChooseUs />
    </section>
  );
}
