import './HistoryItem.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteItem = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history">
      <p className="time-stamp">{timeAccessed}</p>
      <div className="domain-details-container">
        <div className="domain-details">
          <img src={logoUrl} alt="domain logo" className="domain-image" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          testId="delete"
          className="delete-button"
          onClick={this.onDeleteItem}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
