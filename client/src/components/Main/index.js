import {useState} from 'react'
import "./Main.scss"
import { fileLink } from "../../variables"
import { initialFiles } from '../../initialState'


function Main(){

  const ecuBackupFlowImage = `${fileLink}Images/Frontend/EcuBackupFlow.png`

  const [files] = useState(initialFiles)
  const [currentPage, setCurrentPage] = useState(1)
  const filesPerPage = 5

  const totalPages = Math.ceil(files.length / filesPerPage)
  const startIndex = (currentPage - 1) * filesPerPage
  const currentFiles = files.slice(startIndex, startIndex + filesPerPage)

  return(
    <main className="Main flex column start">

      <div className="EcuBackupImageArea flex">
        <img className="EcuBackupImage flex" src={ecuBackupFlowImage} alt="EcuBackupImage" />
        <div className="BackupCounter flex txtOrg">
          <span>Liczba backupów na serwerze:</span>
          <span className="bold">{files.length}</span>
        </div>
      </div>

      <div className="SearchArea flex stretch">
        <input
          type="text"
          placeholder="WPROWADŹ FRAZĘ..."
          className="SearchInput"
        />
        <button className="SearchButton">
          Szukaj
        </button>
      </div>

      <div className="FilesArea flex wrap">
        {currentFiles.map((file, index) => (
          <div className="FileItem flex stretch" key={`${file?.id}${index}`}>
            <div className="FileItemCell FileId">{file?.id}</div>
            <div className="FileItemCell FileBrand">{file?.brand}</div>
            <div className="FileItemCell FileHW">{file?.hw}</div>
            <div className="FileItemCell FileECU">{file?.ecu}</div>
            <div className="FileItemCell FileDesc">{file?.desc}</div>
            <div className="DownloadButton GrnBtn flex radius">Pobierz</div>
          </div>
        ))}
      </div>

      <div className="Pagination flex">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`PageButton ${currentPage === index + 1 ? 'ActBtn' : ''}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="InfoArea flex stretch">

        <div className="InfoSection flex column start radius">
          <h2 className="txtOrg">⚠️ Ważne informacje</h2>
          <p>Usługa przeznaczona dla profesjonalnych warsztatów i specjalistów z zakresu naprawy ECU.</p>
          <p>Oprogramowanie zmodyfikowane do celów testowych - stosowanie w ruchu drogowym może wymagać dodatkowych zezwoleń lub homologacji, zgodnie z przepisami obowiązującymi w kraju użytkownika.</p>
          <p>Plik nie jest instrukcją naprawy ani oficjalnym produktem producenta pojazdu.</p>
        </div>

        <div className="InfoSection flex column start radius">
          <h2 className="txtOrg flex start">📃 Notka prawna</h2>
          <p>Wszystkie użyte nazwy handlowe, znaki towarowe i oznaczenia producentów pojazdów oraz sterowników służą wyłącznie do identyfikacji i pozostają własnością ich prawowitych właścicieli.</p>
          <p>Oferowana usługa dotyczy wyłącznie przygotowania zmodyfikowanego pliku wsadowego do zastosowań testowych, diagnostycznych i naprawczych.</p>
        </div>

      </div>

    </main>
  )
}

export default Main