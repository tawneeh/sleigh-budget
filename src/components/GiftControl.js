import React from "react";
import NewGiftForm from "./NewGiftForm";
import GiftList from "./GiftList";
import GiftDetail from "./GiftDetail";
import EditGiftForm from "./EditGiftForm";
import * as a from './../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class GiftControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedGift: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedGift != null) {
      this.setState({
        selectedGift: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleChangingSelectedGift = (id) => {
    const selectedGift = this.props.masterGiftList[id];
    this.setState({selectedGift: selectedGift});
  }

  handleAddingNewGiftToList = (newGift) => {
    const { dispatch } = this.props;
    const action = a.addGift(newGift);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleDeletingGift = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteGift(id);
    dispatch(action);
    this.setState({selectedGift: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingGiftInList = (giftToEdit) => {
    const { dispatch } = this.props;
    const action = a.addGift(giftToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedGift: null
    });
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentVisibleState = <EditGiftForm gift = {this.state.selectedGift}
      onEditGift = {this.handleEditingGiftInList} />
      buttonText = "Return to the Gift List";
    } else if (this.state.selectedGift != null) {
      currentVisibleState = <GiftDetail gift = {this.state.selectedGift} 
      onClickingDelete = {this.handleDeletingGift}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to the Gift List";
    } else if (this.props.formVisibleOnPage) {
      currentVisibleState = <NewGiftForm onNewGiftCreation={this.handleAddingNewGiftToList} />
      buttonText = "Return to the Gift List";
    } else {
      currentVisibleState = <GiftList giftList={this.props.masterGiftList} onGiftSelection={this.handleChangingSelectedGift} />;
      buttonText = "Add a Gift";
    }
    return (
      <>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

GiftControl.propTypes = {
  masterGiftList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterGiftList: state.masterGiftList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

GiftControl = connect(mapStateToProps)(GiftControl);

export default GiftControl;