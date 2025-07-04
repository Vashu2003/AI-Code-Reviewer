from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean, Float
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Submission(Base):
    __tablename__ = "submissions"

    id = Column(Integer, primary_key=True, index=True)
    language = Column(String(20))
    code = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)

    pass_status = Column(Boolean)
    readability_score = Column(Integer)
    efficiency_score = Column(Integer)
    suggestions = Column(Text)         # Comma-separated or JSON string
    errors = Column(Text)              # Same
    corrected_code = Column(Text)
    raw_ai_feedback = Column(Text)
    similarity_score = Column(Float)
    is_similar_to_sample = Column(Boolean)

class SampleAnswer(Base):
    __tablename__ = "sample_answers"

    id = Column(Integer, primary_key=True, index=True)
    question_title = Column(String, nullable=False)
    language = Column(String, nullable=False)
    ideal_code = Column(Text, nullable=False)

