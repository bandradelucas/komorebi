import { useState } from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  EuiTextArea,
  EuiButton,
  EuiCallOut,
} from '@elastic/eui';

export function RandomChoicePage() {
  const [keywords, setKeywords] = useState('');
  const [result, setResult] = useState('');

  const handleClick = () => {
    const keywordsFormatted = keywords
      .replace(/\r\n/g, '\n')
      .split('\n')
      .filter((keyword) => keyword !== '');

    setResult(
      keywordsFormatted[Math.floor(Math.random() * keywordsFormatted.length)]
    );

    console.log(result);
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
                <h1>Erabu</h1>
              </EuiTitle>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>
            <EuiTextArea
              fullWidth
              placeholder="Insira cada palavra-chave em uma linha, utilize <enter> para pular.&#10;Exemplo:&#10;Genshin Impact&#10;Stardew Valley&#10;Naruto&#10;Konosuba"
              value={keywords}
              onChange={(event) => setKeywords(event.target.value)}
            />
            <EuiButton iconType="grid" fill fullWidth onClick={handleClick}>
              Erabu!
            </EuiButton>
            {result && (
              <EuiCallOut
                size="m"
                title={result}
                iconType="faceHappy"
                style={{ marginTop: '1em' }}
              />
            )}
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}
