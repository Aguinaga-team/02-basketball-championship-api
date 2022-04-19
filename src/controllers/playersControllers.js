const localData = [
  {
    name: 'Enver',
    number: '00',
  },
  {
    name: 'Carlos',
    number: '0',
  },
  {
    name: 'Gonzalo',
    number: '9',
  },
];

const getPlayer = (req, res) => {
  console.log('Se mandó la data solicitada');
  res.status(200).json({ data: localData });
};

module.exports = { getPlayer };
