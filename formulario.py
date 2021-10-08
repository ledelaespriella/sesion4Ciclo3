from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Length, Email
from wtforms.fields.html5 import EmailField


class FormInicio(FlaskForm):

    nombre = StringField('nombre', validators=[DataRequired(message='No dejar vacio'), Length(max=15), ])
    correo = EmailField('correo', validators=[DataRequired(message='No dejar vacio')])
    mensaje= StringField('mensaje', validators=[DataRequired(message='No dejar vacio')])
    enviar= SubmitField('Iniciar sesion')
    
