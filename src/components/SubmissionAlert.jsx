function SubmissionAlert() {
  return (
    <div className="rounded-md bg-red-50 p-4 w-4/5">
      <div className="flex justify-center">
        <h3 className="text-lg font-medium text-red-800">
          Incorrect password or username. Please try again!
        </h3>
      </div>
    </div>
  );
}

export default SubmissionAlert;
