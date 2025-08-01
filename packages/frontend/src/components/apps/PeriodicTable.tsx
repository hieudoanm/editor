import { FC } from 'react';

const Block: FC<{
  mass?: number;
  number?: number;
  symbol?: string;
  name?: string;
  commonName?: string;
}> = ({ number = 0, mass = 0, symbol = '', name = '', commonName }) => {
  return (
    <div className="relative aspect-square w-16 transform rounded-lg border border-white/20 bg-white/10 text-neutral-100 shadow-lg backdrop-blur-md transition-all duration-100 ease-linear hover:z-10 hover:scale-[2]">
      {number > 0 && (
        <div className="absolute top-2 left-2">
          <p className="truncate text-center text-[8px]">{number}</p>
        </div>
      )}
      {mass > 0 && (
        <div className="absolute top-2 right-2" title={mass.toString()}>
          <p className="truncate text-center text-[8px]">{Math.round(mass)}</p>
        </div>
      )}
      <div className="flex h-full w-full items-center justify-center text-sm">
        <p className="text-sm font-black text-red-500">{symbol}</p>
      </div>
      <div className="absolute right-0 bottom-1 left-0 truncate px-2 text-center text-[8px]">
        <p className="truncate text-center text-[8px]" title={commonName ?? name}>
          {commonName ?? name}
        </p>
      </div>
    </div>
  );
};

export const PeriodicTable: FC = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-center">
        <p className="truncate">Periodic Table (Period / Group)</p>
      </div>
      <div className="scroll-none overflow-auto">
        <table>
          <thead>
            <tr>
              <th colSpan={20}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">
                <span className="whitespace-nowrap">P / G</span>
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                1
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                2
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                3
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                4
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                5
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                6
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                7
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                8
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                9
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                10
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                11
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                12
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                13
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                14
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                15
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                16
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                17
              </td>
              <td className="p-2 whitespace-nowrap" align="center">
                18
              </td>
              <td className="p-2" align="center">
                <span className="whitespace-nowrap">G / P</span>
              </td>
            </tr>
            <tr>
              <td className="p-2" align="center">
                1
              </td>
              <td className="p-2">
                <Block number={1} symbol="H" name="Hydrogen" mass={1.00794} />
              </td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2">
                <Block number={2} symbol="He" name="Helium" mass={4.002602} />
              </td>
              <td className="p-2" align="center">
                1
              </td>
            </tr>
            <tr>
              <td className="p-2" align="center">
                2
              </td>
              <td className="p-2">
                <Block number={3} symbol="Li" name="Lithium" mass={6.941} />
              </td>
              <td className="p-2">
                <Block number={4} symbol="Be" name="Beryllium" mass={9.012182} />
              </td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2">
                <Block number={5} symbol="B" name="Boron" mass={10.811} />
              </td>
              <td className="p-2">
                <Block number={6} symbol="C" name="Carbon" mass={12.011} />
              </td>
              <td className="p-2">
                <Block number={7} symbol="N" name="Nitrogen" mass={14.00674} />
              </td>
              <td className="p-2">
                <Block number={8} symbol="O" name="Oxygen" mass={15.9994} />
              </td>
              <td className="p-2">
                <Block number={9} symbol="F" name="Fluorine" mass={18.9984032} />
              </td>
              <td className="p-2">
                <Block number={10} symbol="Ne" name="Neon" mass={20.1797} />
              </td>
              <td className="p-2" align="center">
                2
              </td>
            </tr>
            <tr>
              <td className="p-2" align="center">
                3
              </td>
              <td className="p-2">
                <Block number={11} symbol="Na" name="Natrium" commonName="Sodium" mass={22.989768} />
              </td>
              <td className="p-2">
                <Block number={12} symbol="Mg" name="Magnesium" mass={24.305} />
              </td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2">
                <Block number={13} symbol="Al" name="Aluminium" mass={26.981539} />
              </td>
              <td className="p-2">
                <Block number={14} symbol="Si" name="Silicon" mass={28.0855} />
              </td>
              <td className="p-2">
                <Block number={15} symbol="P" name="Phosphorus" mass={30.973762} />
              </td>
              <td className="p-2">
                <Block number={16} symbol="S" name="Sulfur" mass={32.066} />
              </td>
              <td className="p-2">
                <Block number={17} symbol="Cl" name="Chlorine" mass={35.4527} />
              </td>
              <td className="p-2">
                <Block number={18} symbol="Ar" name="Argon" mass={39.948} />
              </td>
              <td className="p-2" align="center">
                3
              </td>
            </tr>
            <tr>
              <td className="p-2" align="center">
                4
              </td>
              <td className="p-2">
                <Block number={19} symbol="K" name="Kalium" commonName="Potassium" mass={39.0983} />
              </td>
              <td className="p-2">
                <Block number={20} symbol="Ca" name="Calcium" mass={40.078} />
              </td>
              <td className="p-2">
                <Block number={21} symbol="Sc" name="Scandium" mass={44.95591} />
              </td>
              <td className="p-2">
                <Block number={22} symbol="Ti" name="Titanium" mass={47.88} />
              </td>
              <td className="p-2">
                <Block number={23} symbol="V" name="Vanadium" mass={50.9415} />
              </td>
              <td className="p-2">
                <Block number={24} symbol="Cr" name="Chromium" mass={51.9961} />
              </td>
              <td className="p-2">
                <Block number={25} symbol="Mn" name="Manganese" mass={54.93805} />
              </td>
              <td className="p-2">
                <Block number={26} symbol="Fe" name="Ferrum" commonName="Iron" mass={55.847} />
              </td>
              <td className="p-2">
                <Block number={27} symbol="Co" name="Cobalt" mass={58.9332} />
              </td>
              <td className="p-2">
                <Block number={28} symbol="Ni" name="Nickel" mass={58.69} />
              </td>
              <td className="p-2">
                <Block number={29} symbol="Cu" name="Cuprum" commonName="Copper" mass={63.546} />
              </td>
              <td className="p-2">
                <Block number={30} symbol="Zn" name="Zinc" mass={65.39} />
              </td>
              <td className="p-2">
                <Block number={31} symbol="Ga" name="Gallium" mass={69.723} />
              </td>
              <td className="p-2">
                <Block number={32} symbol="Ge" name="Germanium" mass={72.61} />
              </td>
              <td className="p-2">
                <Block number={33} symbol="As" name="Arsenic" mass={74.92159} />
              </td>
              <td className="p-2">
                <Block number={34} symbol="Se" name="Selenium" mass={78.96} />
              </td>
              <td className="p-2">
                <Block number={35} symbol="Br" name="Bromine" mass={79.904} />
              </td>
              <td className="p-2">
                <Block number={36} symbol="Kr" name="Krypton" mass={83.8} />
              </td>
              <td className="p-2" align="center">
                4
              </td>
            </tr>
            <tr>
              <td className="p-2" align="center">
                5
              </td>
              <td className="p-2">
                <Block number={37} symbol="Rb" name="Rubidium" mass={85.4678} />
              </td>
              <td className="p-2">
                <Block number={38} symbol="Sr" name="Strontium" mass={87.62} />
              </td>
              <td className="p-2">
                <Block number={39} symbol="Y" name="Yttrium" mass={88.90585} />
              </td>
              <td className="p-2">
                <Block number={40} symbol="Zr" name="Zirconium" mass={91.224} />
              </td>
              <td className="p-2">
                <Block number={41} symbol="Nb" name="Niobium" mass={92.90638} />
              </td>
              <td className="p-2">
                <Block number={42} symbol="Mo" name="Molybdenum" mass={95.94} />
              </td>
              <td className="p-2">
                <Block number={43} symbol="Tc" name="Technetium" mass={98.9063} />
              </td>
              <td className="p-2">
                <Block number={44} symbol="Ru" name="Ruthenium" mass={101.07} />
              </td>
              <td className="p-2">
                <Block number={45} symbol="Rh" name="Rhodium" mass={102.9055} />
              </td>
              <td className="p-2">
                <Block number={46} symbol="Ph" name="Palladium" mass={106.42} />
              </td>
              <td className="p-2">
                <Block number={47} symbol="Ag" name="Argentum" commonName="Silver" mass={107.8682} />
              </td>
              <td className="p-2">
                <Block number={48} symbol="Cd" name="Cadmium" mass={112.411} />
              </td>
              <td className="p-2">
                <Block number={49} symbol="In" name="Indium" mass={114.82} />
              </td>
              <td className="p-2">
                <Block number={50} symbol="Sn" name="Stannum" commonName="Tin" mass={118.71} />
              </td>
              <td className="p-2">
                <Block number={51} symbol="Sb" name="Stibium" commonName="Antimony" mass={121.75} />
              </td>
              <td className="p-2">
                <Block number={52} symbol="Te" name="Tellurium" mass={127.6} />
              </td>
              <td className="p-2">
                <Block number={53} symbol="I" name="Iodine" mass={126.90447} />
              </td>
              <td className="p-2">
                <Block number={54} symbol="Xe" name="Xenon" mass={131.29} />
              </td>
              <td className="p-2" align="center">
                5
              </td>
            </tr>
            <tr>
              <td className="p-2" align="center">
                6
              </td>
              <td className="p-2">
                <Block number={55} symbol="Cs" name="Caesium" mass={132.90543} />
              </td>
              <td className="p-2">
                <Block number={56} symbol="Ba" name="Barium" mass={137.327} />
              </td>
              <td className="p-2">
                <Block symbol="57-71" />
              </td>
              <td className="p-2">
                <Block number={72} symbol="Hf" name="Hafnium" mass={178.49} />
              </td>
              <td className="p-2">
                <Block number={73} symbol="Ta" name="Tantalum" mass={180.9479} />
              </td>
              <td className="p-2">
                <Block number={74} symbol="W" name="Wolfram" commonName="Tungsten" mass={183.85} />
              </td>
              <td className="p-2">
                <Block number={75} symbol="Re" name="Rhenium" mass={186.207} />
              </td>
              <td className="p-2">
                <Block number={76} symbol="Os" name="Osmium" mass={190.2} />
              </td>
              <td className="p-2">
                <Block number={77} symbol="Ir" name="Iridium" mass={192.22} />
              </td>
              <td className="p-2">
                <Block number={78} symbol="Pt" name="Platinum" mass={195.08} />
              </td>
              <td className="p-2">
                <Block number={79} symbol="Au" name="Aurum" commonName="Gold" mass={196.96654} />
              </td>
              <td className="p-2">
                <Block number={80} symbol="Hg" name="Hydragyrum" commonName="Mercury" mass={200.59} />
              </td>
              <td className="p-2">
                <Block number={81} symbol="Tl" name="Thallium" mass={204.3833} />
              </td>
              <td className="p-2">
                <Block number={82} symbol="Pb" name="Plumbum" commonName="Lead" mass={207.2} />
              </td>
              <td className="p-2">
                <Block number={83} symbol="Bi" name="Bismuth" mass={208.98037} />
              </td>
              <td className="p-2">
                <Block number={84} symbol="Po" name="Polonium" mass={208.9824} />
              </td>
              <td className="p-2">
                <Block number={85} symbol="At" name="Astatine" mass={209.9871} />
              </td>
              <td className="p-2">
                <Block number={86} symbol="Rn" name="Radon" mass={222.0176} />
              </td>
              <td className="p-2" align="center">
                6
              </td>
            </tr>
            <tr>
              <td className="p-2" align="center">
                7
              </td>
              <td className="p-2">
                <Block number={87} symbol="Fr" name="Franci" mass={223.0197} />
              </td>
              <td className="p-2">
                <Block number={88} symbol="Ra" name="Radium" mass={226.0254} />
              </td>
              <td className="p-2">
                <Block symbol="89-103" />
              </td>
              <td className="p-2">
                <Block number={104} symbol="Rf" name="Rutherfordium" mass={261.1087} />
              </td>
              <td className="p-2">
                <Block number={105} symbol="Db" name="Dubnium" mass={262.1138} />
              </td>
              <td className="p-2">
                <Block number={106} symbol="Sg" name="Seaborgium" mass={263.1182} />
              </td>
              <td className="p-2">
                <Block number={107} symbol="Bh" name="Bohrium" mass={262} />
              </td>
              <td className="p-2">
                <Block number={108} symbol="Hs" name="Hassium" mass={265} />
              </td>
              <td className="p-2">
                <Block number={109} symbol="Mt" name="Meitnerium" mass={266} />
              </td>
              <td className="p-2">
                <Block number={110} symbol="Ds" name="Darmstadtium" mass={269} />
              </td>
              <td className="p-2">
                <Block number={111} symbol="Rg" name="Roentgenium" mass={272} />
              </td>
              <td className="p-2">
                <Block number={112} symbol="Cn" name="Copernicium " mass={277} />
              </td>
              <td className="p-2">
                <Block number={113} symbol="Nh" name="Nihonium" mass={0} />
              </td>
              <td className="p-2">
                <Block number={114} symbol="Fl" name="Flerovi" mass={0} />
              </td>
              <td className="p-2">
                <Block number={115} symbol="Mc" name="Moscovium" mass={0} />
              </td>
              <td className="p-2">
                <Block number={116} symbol="Lv" name="Livermorium" mass={0} />
              </td>
              <td className="p-2">
                <Block number={117} symbol="Ts" name="Tennessine" mass={0} />
              </td>
              <td className="p-2">
                <Block number={118} symbol="Og" name="Oganesson" mass={0} />
              </td>
              <td className="p-2" align="center">
                7
              </td>
            </tr>
            <tr>
              <td align="right" colSpan={3}>
                <p className="px-1 text-sm">Lanthanide Series</p>
              </td>
              <td className="p-2">
                <Block number={57} symbol="La" name="Lanthanum" mass={138.9055} />
              </td>
              <td className="p-2">
                <Block number={58} symbol="Ce" name="Cerium" mass={140.115} />
              </td>
              <td className="p-2">
                <Block number={59} symbol="Pr" name="Praseodymium" mass={140.90765} />
              </td>
              <td className="p-2">
                <Block number={60} symbol="Nd" name="Neodymium" mass={144.24} />
              </td>
              <td className="p-2">
                <Block number={61} symbol="Pm" name="Promethium" mass={146.9151} />
              </td>
              <td className="p-2">
                <Block number={62} symbol="Sm" name="Samarium" mass={150.36} />
              </td>
              <td className="p-2">
                <Block number={63} symbol="Eu" name="Europium" mass={151.965} />
              </td>
              <td className="p-2">
                <Block number={64} symbol="Gd" name="Gadolinium" mass={157.25} />
              </td>
              <td className="p-2">
                <Block number={65} symbol="Tb" name="Terbium" mass={158.92534} />
              </td>
              <td className="p-2">
                <Block number={66} symbol="Dy" name="Dysprosium" mass={162.5} />
              </td>
              <td className="p-2">
                <Block number={67} symbol="Ho" name="Holmium" mass={164.93032} />
              </td>
              <td className="p-2">
                <Block number={68} symbol="Er" name="Erbium" mass={167.26} />
              </td>
              <td className="p-2">
                <Block number={69} symbol="Tm" name="Thulium" mass={168.93421} />
              </td>
              <td className="p-2">
                <Block number={70} symbol="Yb" name="Ytterbium" mass={173.04} />
              </td>
              <td className="p-2">
                <Block number={71} symbol="Lu" name="Lutetium" mass={174.967} />
              </td>
              <td className="p-2"></td>
            </tr>
            <tr>
              <td align="right" colSpan={3}>
                <p className="px-1 text-sm">Actinide Series</p>
              </td>
              <td className="p-2">
                <Block number={89} symbol="Ac" name="Actinium" mass={227.0278} />
              </td>
              <td className="p-2">
                <Block number={90} symbol="Th" name="Thorium" mass={232.0381} />
              </td>
              <td className="p-2">
                <Block number={91} symbol="Pa" name="Protactinium" mass={231.0359} />
              </td>
              <td className="p-2">
                <Block number={92} symbol="U" name="Uranium" mass={238.0289} />
              </td>
              <td className="p-2">
                <Block number={93} symbol="Np" name="Neptunium" mass={237.0482} />
              </td>
              <td className="p-2">
                <Block number={94} symbol="Pu" name="Plutonium" mass={244.0642} />
              </td>
              <td className="p-2">
                <Block number={95} symbol="Am" name="Americium" mass={243.0614} />
              </td>
              <td className="p-2">
                <Block number={96} symbol="Cm" name="Curium" mass={247.0703} />
              </td>
              <td className="p-2">
                <Block number={97} symbol="Bk" name="Berkelium" mass={247.0703} />
              </td>
              <td className="p-2">
                <Block number={98} symbol="Cf" name="Californium" mass={251.0796} />
              </td>
              <td className="p-2">
                <Block number={99} symbol="Es" name="Einsteinium" mass={252.0829} />
              </td>
              <td className="p-2">
                <Block number={100} symbol="Fm" name="Fermium" mass={257.0951} />
              </td>
              <td className="p-2">
                <Block number={101} symbol="Md" name="Mendelevium" mass={258.0986} />
              </td>
              <td className="p-2">
                <Block number={102} symbol="No" name="Nobelium" mass={259.1009} />
              </td>
              <td className="p-2">
                <Block number={103} symbol="Lr" name="Lawrencium" mass={260.1053} />
              </td>
              <td className="p-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
