const Annotations = require("../models/AnnotationData");

module.exports = {
  //vai buscar o Priority pela condição true ou false
  async read(req, res) {
    const priority = req.query;

    const priorityNotes = await Annotations.find(priority);

    return res.json(priorityNotes);
  },

  async update(req, res) {
    const { id } = req.params;

    const annotation = await Annotations.findOne({ _id: id });
    //condição para alterar entre true ou false
    if (annotation.priority) {
      annotation.priority = false;
    } else {
      annotation.priority = true;
    }

    //quando a alteração for feita o priority vai ser salvo
    await annotation.save();

    return res.json(annotation);
  },
};
