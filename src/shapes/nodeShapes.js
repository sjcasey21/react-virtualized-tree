import PropTypes from 'prop-types';

export const NodeState = {
  expanded: PropTypes.bool,
  deletable: PropTypes.bool,
  favorite: PropTypes.bool
};

const BasicNode = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.shape(NodeState)
};

export const Node = {
  ...BasicNode
};

Node.children = PropTypes.arrayOf(PropTypes.shape(Node));

export const FlattenedNode = {
  ...BasicNode,
  deepness: PropTypes.number.isRequired,
  parents: PropTypes.arrayOf(PropTypes.number)
};
