import React from 'react'
import { OptionsContainer } from './OptionsContainer'
import { Label } from './Label'
import { english, espanol } from '../languages/languages';

interface Props {
  esDark: boolean,
  isHardMode: boolean,
  modoDificil(): void,
  modoNormal(): void,
  setEsDark: React.Dispatch<React.SetStateAction<boolean>>,
  setLanguage: React.Dispatch<React.SetStateAction<any>>,
  language: any
}
export const SettingsModal = ({ esDark, isHardMode, language, modoDificil, modoNormal, setEsDark, setLanguage }: Props) => {
  return (
    <section>
      <dialog className="nes-dialog" id="settings-dialog">
        <form method="dialog">
          <p className="title">{language.opciones}</p>
          <OptionsContainer>
            <Label mode='modo' defaultChecked={true} onClick={modoNormal} text={language.modoNormal} value={isHardMode} />
            <Label mode='modo' defaultChecked={false} onClick={modoDificil} text={language.modoDificl} value={isHardMode} />
          </OptionsContainer>

          <OptionsContainer>
            <Label mode='dark-light' defaultChecked={true} onClick={() => setEsDark(false)} text={language.modoClaro} value={esDark} />
            <Label mode='dark-light' defaultChecked={false} onClick={() => setEsDark(true)} text={language.modoOscuro} value={esDark} />
          </OptionsContainer>

          <OptionsContainer>
            <Label mode='language' defaultChecked={true} onClick={() => setLanguage(espanol)} text={language.español} value={language.español} />
            <Label mode='language' defaultChecked={false} onClick={() => setLanguage(english)} text={language.ingles} value={language.ingles} />
          </OptionsContainer>

          <menu
            className="dialog-menu"
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button className="nes-btn modal-btn" style={{ marginRight: '40px' }}>
              {language.cerrar}
            </button>
          </menu>
        </form>
      </dialog>
    </section>
  )
}
