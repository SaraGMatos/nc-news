function SubmissionAlert({ message }) {
  return (
    <div className="rounded-md bg-red-50 p-4 w-4/5">
      <div className="flex justify-center">
        <h3 className="text-lg font-medium text-red-800">{message}</h3>
      </div>
    </div>
  );
}

export default SubmissionAlert;
