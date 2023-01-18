import noDataFoundImage from '../../assets/images/no-data-found.png'

export const NoDataFound = () => {
  return (
    <div className="flex justify-center p-10">
      <img
        src={noDataFoundImage}
        alt="no data found"
        className="w-full max-w-md"
      />
    </div>
  )
}
