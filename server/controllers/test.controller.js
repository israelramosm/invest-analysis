export const getTests = (req, res) => {
  const data = [
    {
      message: 'GET /api/tests',
    },
    {
      message: 'GET /api/tests 2',
    },
  ];
  return res.status(200).send(data);
};

export const getTest = (req, res) => {
  const data = {
    message: 'GET /api/test',
  };
  res.status(200).send(data);
};

export const postTest = (req, res) => {
  const data = {
    message: 'POST /api/test',
    body: req.body,
  };

  res.status(200).send(data);
};

export const putTest = (req, res) => {
  const data = {
    message: 'PUT /api/test',
    body: req.body,
  };
  res.status(200).send(data);
};

export const deleteTest = (req, res) => {
  const data = {
    message: 'DELETE /api/test',
    body: req.body,
  };
  res.status(200).send(data);
};
