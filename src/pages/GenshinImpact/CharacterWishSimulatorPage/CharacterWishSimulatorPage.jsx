import { useEffect, useState } from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  EuiButton,
  EuiImage,
} from '@elastic/eui';

import Icon from '@mdi/react';
import { mdiStarFourPointsOutline, mdiStar } from '@mdi/js';

const characters = require('../../../utils/GenshinImpact/characters.json');

export function CharacterWishSimulatorPage() {
  const [character, setCharacter] = useState({});
  const [characterImageUrl, setCharacterImageUrl] = useState('');
  const [characterElementImageUrl, setCharacterElementImageUrl] = useState('');

  useEffect(() => {
    if (Object.keys(character).length > 0) {
      setCharacterImageUrl(
        `https://api.genshin.dev/characters/${character.name.toLowerCase()}/icon`
      );

      setCharacterElementImageUrl(
        `https://api.genshin.dev/elements/${character.element.toLowerCase()}/icon`
      );
    }
  }, [character]);

  const handleClick = () => {
    setCharacter(characters[Math.floor(Math.random() * characters.length)]);
  };

  return (
    <EuiPage style={{ height: '100vh' }}>
      <EuiPageBody>
        <EuiPageContent
          verticalPosition="center"
          horizontalPosition="center"
          style={{ width: '50%' }}
        >
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection style={{ margin: 'auto' }}>
              <EuiTitle>
                <div style={{ textAlign: 'center' }}>
                  <h1>Simulador de Desejos para Personagens</h1>
                  <h2>Genshin Impact</h2>
                </div>
              </EuiTitle>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>
            <EuiButton
              fill
              fullWidth
              onClick={handleClick}
              style={{ height: '10rem', fontSize: '2rem' }}
            >
              <Icon
                path={mdiStarFourPointsOutline}
                title="Primogem"
                size={2}
                style={{ marginRight: '1rem', verticalAlign: 'middle' }}
              />
              Roletar!
            </EuiButton>
            {Object.keys(character).length > 0 && (
              <EuiPageContent color="subdued" style={{ textAlign: 'center' }}>
                <h1>{character.name}</h1>
                <div>
                  {[...Array(character.rating)].map((e, i) => (
                    <Icon path={mdiStar} title="Star" size={1} color="yellow" />
                  ))}
                </div>
                <div>
                  <EuiImage
                    alt={character.name}
                    src={characterImageUrl}
                    style={{ display: 'block' }}
                  />
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <EuiImage
                    alt={character.element}
                    src={characterElementImageUrl}
                    style={{ display: 'block' }}
                  />
                </div>
              </EuiPageContent>
            )}
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}
